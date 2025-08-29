import artists from '../data/artists.json';
import musicians from '../data/musicians.json';
import influentialPeople from '../data/influentialPeople.json';
import leaders from '../data/leaders.json';
import { AllData } from '.';

export function getData(): AllData {
  const processedMusicians = musicians.map(function (musician) {
    return { ...musician, type: 'musician' };
  });
  const processedLeaders = leaders.map(function (leader) {
    return { ...leader, type: 'leader' };
  });
  const processedInfluentialPeople = influentialPeople.map(function (person) {
    return { ...person, type: 'influential-person' };
  });
  const processedArtists = artists.map(function (artist) {
    return { ...artist, type: 'artist' };
  });
  return {
    people: [
      ...processedArtists,
      ...processedMusicians,
      ...processedLeaders,
      ...processedInfluentialPeople,
    ],
  };
}
