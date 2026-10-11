export const readPhotoAsDataUrl = async (file) => {
  if (!file) {
    return null;
  }

  let image;
  try {
    image = await createImageBitmap(file);
  } catch {
    throw new Error('Unable to read the selected photo.');
  }

  try {
    const longestSide = Math.max(image.width, image.height);
    const scale = Math.min(1, 1200 / longestSide);
    const canvas = document.createElement('canvas');
    canvas.width = Math.max(1, Math.round(image.width * scale));
    canvas.height = Math.max(1, Math.round(image.height * scale));

    const context = canvas.getContext('2d');
    if (!context) throw new Error('Photo compression is not supported by this browser.');
    context.fillStyle = '#ffffff';
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.drawImage(image, 0, 0, canvas.width, canvas.height);

    for (const quality of [0.8, 0.65, 0.5]) {
      const dataUrl = canvas.toDataURL('image/jpeg', quality);
      if (dataUrl.length <= 1_200_000) return dataUrl;
    }
    throw new Error('The photo could not be compressed enough to submit. Choose a smaller image.');
  } finally {
    image.close();
  }
};
