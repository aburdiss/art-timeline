import musicians from '../data/musicians.json';
import leaders from '../data/leaders.json';
import { AllData } from '.';

export function getData(): AllData {
  const processedMusicians = musicians.map(function (musician) {
    return { ...musician, type: 'musician' };
  });
  const processedLeaders = leaders.map(function (leader) {
    return { ...leader, type: 'leader' };
  });
  return { musicians: processedMusicians, leaders: processedLeaders };
}
