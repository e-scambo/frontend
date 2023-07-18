import { useState } from 'react';
import { Announcement } from 'types';
import AnnouncementService from 'services/Announcement';

function useMyAds() {
  const [ads, setAds] = useState<Announcement[]>([]);
  const announcementService = new AnnouncementService();

  async function fetchMyAds(id: string) {
    try {
      const response = await announcementService.getMyAds(id);
      setAds(response?.data as Announcement[]);
    } catch (error) {
      // Trate o erro de acordo com a sua necessidade
    }
  }

  return {
    ads,
    fetchMyAds,
  };
}

export default useMyAds;
