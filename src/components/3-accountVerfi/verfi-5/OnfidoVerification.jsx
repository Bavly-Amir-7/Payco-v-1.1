import { useState, useEffect, useRef } from "react";
import "./verfi5.css";

const ONFIDO_WORKFLOW_ID = "ee0c874f-816e-4a63-99fb-d4129e29ae90";

const OnfidoVerification = ({ applicantId, onVerificationComplete }) => {
  const [sdkToken, setSdkToken] = useState(null);
  const [verificationComplete, setVerificationComplete] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [onfidoInstance, setOnfidoInstance] = useState(null);
  const [workflowRunId, setWorkflowRunId] = useState(null);
  const [initializationStage, setInitializationStage] = useState("Preparing verification...");
  const [authError, setAuthError] = useState(false);
  
  const verificationStarted = useRef(false);
  const initializationInProgress = useRef(false);

  // Add function to refresh auth token
  const refreshAuthToken = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/refresh-token', {
        method: 'POST',
        credentials: 'include'
      });
      
      if (response.ok) {
        return true;
      }
      return false;
    } catch (error) {
      console.error('Failed to refresh token:', error);
      return false;
    }
  };

  // Add useEffect to load Onfido SDK script
  useEffect(() => {
    const loadOnfidoScript = () => {
      const script = document.createElement('script');
      script.src = 'https://sdk.onfido.com/v14';
      script.async = true;
      script.onload = () => {
        console.log('Onfido SDK script loaded successfully');
      };
      script.onerror = () => {
        console.error('Failed to load Onfido SDK script');
        setError('Failed to load verification interface. Please refresh the page.');
      };
      document.body.appendChild(script);
    };

    loadOnfidoScript();

    // Cleanup
    return () => {
      const script = document.querySelector('script[src="https://sdk.onfido.com/v14"]');
      if (script) {
        document.body.removeChild(script);
      }
    };
  }, []);

  useEffect(() => {
    const initializeVerification = async () => {
      if (!applicantId || verificationStarted.current || initializationInProgress.current) {
        console.log("Skipping initialization:", {
          applicantId,
          verificationStarted: verificationStarted.current,
          initializationInProgress: initializationInProgress.current
        });
        return;
      }

      try {
        initializationInProgress.current = true;
        verificationStarted.current = true;
        
        // 1️⃣ Start Onfido verification with enhanced logging
        setInitializationStage("Starting verification process...");
        console.log("Starting Onfido verification with:", {
          applicant_id: applicantId,
          workflow_id: ONFIDO_WORKFLOW_ID
        });

        let response;
        try {
          response = await axios.post(
            "http://localhost:5000/api/users/start-onfido",
            { 
              applicant_id: applicantId,
              workflow_id: ONFIDO_WORKFLOW_ID
            },
            {
              headers: {
                'Content-Type': 'application/json',
              },
              withCredentials: true
            }
          );
        } catch (error) {
          // If we get a 401, try to refresh the token
          if (error.response?.status === 401) {
            console.log("Authentication failed, attempting to refresh token...");
            const refreshed = await refreshAuthToken();
            if (refreshed) {
              // Retry the request after refreshing
              response = await axios.post(
                "http://localhost:5000/api/users/start-onfido",
                { 
                  applicant_id: applicantId,
                  workflow_id: ONFIDO_WORKFLOW_ID
                },
                {
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  withCredentials: true
                }
              );
            } else {
              setAuthError(true);
              throw new Error("Session expired. Please log in again.");
            }
          } else {
            throw error;
          }
        }

        // 2️⃣ Validate response data
        console.log("Received response from start-onfido:", {
          has_sdk_token: !!response.data.sdk_token,
          has_workflow_run_id: !!response.data.workflow_run_id,
          workflow_run_id: response.data.workflow_run_id
        });

        if (!response.data.sdk_token) {
          throw new Error("No SDK token received from server");
        }

        if (!response.data.workflow_run_id) {
          throw new Error("No workflow run ID received from server");
        }

        setSdkToken(response.data.sdk_token);
        setWorkflowRunId(response.data.workflow_run_id);
        
        // 3️⃣ Initialize Onfido SDK with enhanced logging
        setInitializationStage("Setting up verification interface...");
        console.log("Initializing Onfido SDK with:", {
          token_present: !!response.data.sdk_token,
          workflow_run_id: response.data.workflow_run_id,
          container_exists: !!document.getElementById('onfido-mount')
        });

        // 4️⃣ Verify mount point exists
        const mountPoint = document.getElementById('onfido-mount');
        if (!mountPoint) {
          throw new Error("Onfido mount point not found in DOM");
        }

        // Update how we create the Onfido instance
        const onfidoObj = window.Onfido.init({
          token: response.data.sdk_token,
          containerId: "onfido-mount",
          workflowRunId: response.data.workflow_run_id,
          onComplete: (data) => {
            console.log("Verification completed successfully:", data);
            setVerificationComplete(true);
            setLoading(false);
            if (onVerificationComplete) {
              onVerificationComplete(data);
            }
          },
          onError: (error) => {
            console.error("Onfido SDK error:", {
              type: error.type,
              message: error.message,
              details: error
            });
            handleOnfidoError(error);
            setLoading(false);
          },
        });

        setOnfidoInstance(onfidoObj);
        setLoading(false);
        console.log("Onfido SDK initialized successfully");

      } catch (error) {
        // 5️⃣ Enhanced error logging
        console.error("Detailed initialization error:", {
          message: error.message,
          response: error.response?.data,
          status: error.response?.status,
          endpoint: error.config?.url,
          requestData: error.config?.data,
          stack: error.stack
        });
        
        let errorMessage = "Failed to start verification. ";
        if (error.response?.data?.error) {
          errorMessage += error.response.data.error;
        } else if (error.response?.data?.details) {
          errorMessage += error.response.data.details;
        } else if (error.message.includes('mount point')) {
          errorMessage += "Technical error: Verification interface could not be loaded.";
        } else {
          errorMessage += "Please check your information and try again.";
        }
        
        setError(errorMessage);
        setLoading(false);
      } finally {
        initializationInProgress.current = false;
      }
    };

    initializeVerification();

    return () => {
      if (onfidoInstance) {
        console.log("Tearing down Onfido instance");
        onfidoInstance.tearDown();
      }
      verificationStarted.current = false;
    };
  }, [applicantId]);

  const handleOnfidoError = (error) => {
    let errorMessage = "Verification failed. Please try again.";

    switch (error.type) {
      case 'invalid_capture':
        errorMessage = "The captured image was invalid. Please try again.";
        break;
      case 'camera_not_working':
        errorMessage = "Camera access is required for verification. Please enable camera access and try again.";
        break;
      case 'network_error':
        errorMessage = "Network error occurred. Please check your connection and try again.";
        break;
      case 'invalid_token':
        errorMessage = "Authentication error. Please try again or contact support.";
        break;
      case 'expired_token':
        errorMessage = "Your session has expired. Please refresh and try again.";
        break;
      default:
        errorMessage = error.message || errorMessage;
    }

    setError(errorMessage);
  };

  const retryVerification = () => {
    setError("");
    setVerificationComplete(false);
    verificationStarted.current = false;
    initializationInProgress.current = false;
    setLoading(true);
  };

  if (authError) {
    return (
      <div className="error-container">
        <h2>Session Expired</h2>
        <p>Your session has expired. Please log in again to continue with verification.</p>
        <button onClick={() => window.location.href = '/login'} className="retry-button">
          Log In Again
        </button>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <h2>Verification Error</h2>
        <p>{error}</p>
        <button onClick={retryVerification} className="retry-button">
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="verification-container">
      {loading && (
        <div className="loading-state">
          <p>{initializationStage}</p>
        </div>
      )}
      <div id="onfido-mount" className="onfido-mount-container" style={{ display: verificationComplete ? 'none' : 'block' }} />
      {verificationComplete && (
        <div className="success-message">
          <h2>Verification Complete!</h2>
          <p>Thank you for completing the verification process.</p>
        </div>
      )}
    </div>
  );
};

export default OnfidoVerification; 