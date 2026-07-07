/**
 * Utility functions for handling file downloads.
 *
 * We fetch the file as a blob and trigger the download from an object URL so
 * the browser never navigates the top window to the PDF. This avoids the
 * Lovable preview iframe showing a "Sign in to continue" screen when the
 * asset URL is opened directly.
 */

const downloadFromUrl = async (url: string, filename: string) => {
  const response = await fetch(url, { credentials: 'omit' });
  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.status}`);
  }
  const blob = await response.blob();
  const objectUrl = URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.href = objectUrl;
  link.download = filename;
  link.rel = 'noopener';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  // Release the object URL on the next tick.
  setTimeout(() => URL.revokeObjectURL(objectUrl), 0);
};

export const handleResumeDownload = async () => {
  try {
    await downloadFromUrl('/Sajid_Rehman_Resume.pdf', 'Sajid_Rehman_Resume.pdf');
    return { success: true, message: 'Your resume PDF download has started.' };
  } catch (error) {
    console.error('Resume download failed:', error);
    return { success: false, message: 'Unable to download resume. Please try again later.' };
  }
};

export const handleCvDownload = async () => {
  try {
    await downloadFromUrl('/Sajid_Rehman_CV.pdf', 'Sajid_Rehman_CV.pdf');
    return { success: true, message: 'Your CV PDF download has started.' };
  } catch (error) {
    console.error('CV download failed:', error);
    return { success: false, message: 'Unable to download CV. Please try again later.' };
  }
};
