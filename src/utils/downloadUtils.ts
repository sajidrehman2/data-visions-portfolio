/**
 * Utility functions for handling file downloads
 */

export const handleResumeDownload = () => {
  try {
    const resumeUrl = '/Sajid_Rehman_Resume.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Sajid_Rehman_Resume.pdf';
    link.rel = 'noopener';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    return {
      success: true,
      message: 'Your resume PDF download has started.',
    };
  } catch (error) {
    console.error('Resume download failed:', error);
    return {
      success: false,
      message: 'Unable to download resume. Please try again later.',
    };
  }
};
