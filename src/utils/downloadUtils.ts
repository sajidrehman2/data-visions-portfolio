
/**
 * Utility functions for handling file downloads
 */

export const handleResumeDownload = () => {
  try {
    // Open the image in a new tab
    const imageUrl = '/lovable-uploads/aec9cbd2-3994-4ed9-8f32-172add3bb0eb.png';
    const imageWindow = window.open(imageUrl, '_blank');
    
    // Check if the window was successfully opened
    if (!imageWindow || imageWindow.closed || typeof imageWindow.closed === 'undefined') {
      console.error('Image window could not be opened. Popup might be blocked.');
      return {
        success: false,
        message: "Please allow popups to view the resume."
      };
    }
    
    return {
      success: true,
      message: "Resume opened in new tab"
    };
  } catch (error) {
    console.error('Opening failed:', error);
    return {
      success: false,
      message: "Unable to open resume. Please try again later."
    };
  }
};
