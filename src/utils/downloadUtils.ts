
/**
 * Utility functions for handling file downloads
 */

export const handleResumeDownload = () => {
  try {
    // Use window.open for direct navigation to the PDF file
    const pdfWindow = window.open('/Sajid_Rehman_Resume.pdf', '_blank');
    
    // Check if the window was successfully opened
    if (!pdfWindow || pdfWindow.closed || typeof pdfWindow.closed === 'undefined') {
      console.error('PDF window could not be opened. Popup might be blocked.');
      return {
        success: false,
        message: "Please allow popups to download the resume."
      };
    }
    
    return {
      success: true,
      message: "Resume opened in new tab"
    };
  } catch (error) {
    console.error('Download failed:', error);
    return {
      success: false,
      message: "Unable to open resume. Please try again later."
    };
  }
};
