import items from './items';

const ClassificationPage = ({ classification }) => {
  const filteredItems = items.filter(item => item.classification === classification);

  return (
    <div>
      {/* Display selected Classification */ }
      <h1>{classification} items</h1> 
      <ul>
        {filteredItems.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ClassificationPage;