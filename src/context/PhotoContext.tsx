import React, { createContext, useContext, useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface PhotoContextType {
  photoUrl: string;
  isCustomPhoto: boolean;
  uploadPhoto: (file: File) => Promise<void>;
  resetPhoto: () => void;
}

const PhotoContext = createContext<PhotoContextType | undefined>(undefined);

export const PhotoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [photoUrl, setPhotoUrl] = useState<string>(PERSONAL_INFO.profileImage);
  const [isCustomPhoto, setIsCustomPhoto] = useState<boolean>(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('santhosh_original_photo');
      if (stored) {
        setPhotoUrl(stored);
        setIsCustomPhoto(true);
      }
    } catch {
      // Fallback if localStorage is unavailable
    }
  }, []);

  const uploadPhoto = (file: File): Promise<void> => {
    return new Promise((resolve, reject) => {
      if (!file.type.startsWith('image/')) {
        reject(new Error('Please select a valid image file.'));
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        if (result) {
          setPhotoUrl(result);
          setIsCustomPhoto(true);
          try {
            localStorage.setItem('santhosh_original_photo', result);
          } catch {
            // quota limit or disabled
          }
          resolve();
        } else {
          reject(new Error('Failed to read image file.'));
        }
      };
      reader.onerror = () => reject(new Error('Error reading file.'));
      reader.readAsDataURL(file);
    });
  };

  const resetPhoto = () => {
    setPhotoUrl(PERSONAL_INFO.profileImage);
    setIsCustomPhoto(false);
    try {
      localStorage.removeItem('santhosh_original_photo');
    } catch {
      // ignore
    }
  };

  return (
    <PhotoContext.Provider value={{ photoUrl, isCustomPhoto, uploadPhoto, resetPhoto }}>
      {children}
    </PhotoContext.Provider>
  );
};

export const usePhoto = (): PhotoContextType => {
  const context = useContext(PhotoContext);
  if (!context) {
    throw new Error('usePhoto must be used within a PhotoProvider');
  }
  return context;
};
