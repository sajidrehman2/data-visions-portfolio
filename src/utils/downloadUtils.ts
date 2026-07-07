import resumePdfUrl from '@/assets/Sajid_Rehman_Resume.pdf?url';
import cvPdfUrl from '@/assets/Sajid_Rehman_CV.pdf?url';

const startDownload = (url: string, filename: string) => {
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.rel = 'noopener';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const handleResumeDownload = async () => {
  try {
    startDownload(resumePdfUrl, 'Sajid_Rehman_Resume.pdf');
    return { success: true, message: 'Your resume PDF download has started.' };
  } catch (error) {
    console.error('Resume download failed:', error);
    return { success: false, message: 'Unable to download resume. Please try again later.' };
  }
};

export const handleCvDownload = async () => {
  try {
    startDownload(cvPdfUrl, 'Sajid_Rehman_CV.pdf');
    return { success: true, message: 'Your CV PDF download has started.' };
  } catch (error) {
    console.error('CV download failed:', error);
    return { success: false, message: 'Unable to download CV. Please try again later.' };
  }
};
