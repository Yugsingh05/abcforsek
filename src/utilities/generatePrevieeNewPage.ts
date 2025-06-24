type GeneratePreviewPathArgs = {
  slug?: string;
  collection?: string;
  req?: any;
};

export const generatePreviewNewpagePath = ({
  slug = '',
  collection = '',
}: GeneratePreviewPathArgs): string => {
  if (!slug || !collection) return '/';

  // Match the app route folder structure
  switch (collection) {
    case 'newpage':
      return `/newpage/${slug}`;
    default:
      return `/${slug}`;
  }
};
