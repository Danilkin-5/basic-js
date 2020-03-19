module.exports = function createDreamTeam(members) {
  let arr = [];
  if(!Array.isArray(members)) return false;
  arr = members.map(item => {
    if(typeof item == 'string') return item.trim()[0].toUpperCase();
  });
  return arr.length == 0 ? false : arr.sort().join('');
};