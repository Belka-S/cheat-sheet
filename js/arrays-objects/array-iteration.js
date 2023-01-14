const insta = [
  { id: '000', position: 1, likes: 3, tags: ['js', 'nodejs', 'css'] },
  { id: '001', position: 11, likes: 6, tags: ['html', 'css', 'nodejs', 'js'] },
  { id: '002', position: 8, likes: 11, tags: ['html', 'js', 'nodejs'] },
  { id: '003', position: 5, likes: 1, tags: ['css', 'react', 'nodejs'] },
  { id: '004', position: 6, likes: 3, tags: ['js', 'nodejs', 'react'] },
];

// ******************** .map() ********************

const getChangedID = (social, id, newId) =>
  social.map(item => (item.id === id ? { ...item, id: newId } : item));

// console.table(getChangedID(insta, '003', 'qwe'));

// ******************** .reduce() ********************

const getAllTags = social =>
  social.reduce((acc, item) => [...acc, ...item.tags], []);

// console.log(getAllTags(insta));
// -----------------------------------------------------------------------------
const tagList = social =>
  social
    .reduce((acc, item) => {
      acc.push(...item.tags);
      return acc;
    }, [])
    .filter((item, index, array) => array.indexOf(item) === index);

// console.log('tagList(insta): ', tagList(insta));
// -----------------------------------------------------------------------------
const getLongTagCount2 = getAllTags(insta).reduce((acc, tag) => {
  if (!acc[tag]) {
    acc[tag] = 0;
  }
  acc[tag] += 1;
  return acc;
}, {});

// console.table(getLongTagCount2);
// -----------------------------------------------------------------------------
const getTagCount1 = getAllTags(insta).reduce(
  (acc, tag) =>
    acc[tag] ? { ...acc, [tag]: acc[tag] + 1 } : { ...acc, [tag]: 1 },
  {}
);

// console.table(getTagCount1);
// -----------------------------------------------------------------------------
const getTagCount = getAllTags(insta).reduce(
  (acc, tag) => ({ ...acc, [tag]: acc[tag] ? acc[tag] + 1 : 1 }),
  {}
);

// console.table(getTagCount);
