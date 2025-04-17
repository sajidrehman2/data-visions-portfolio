
/**
 * Utility functions for handling file downloads
 */

export const handleResumeDownload = () => {
  try {
    // Direct link to resume in the public folder - using window.location for direct navigation
    window.open('/Sajid_Rehman_Resume.pdf', '_blank');
    
    return {
      success: true,
      message: "Resume download initiated"
    };
  } catch (error) {
    console.error('Download failed:', error);
    return {
      success: false,
      message: "Unable to download resume. Please try again later."
    };
  }
};
