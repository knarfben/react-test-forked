const getFranchiseLogo = (franchise: string) => {
  switch (franchise) {
    case 'Dark Horse Comics':
      return 'https://upload.wikimedia.org/wikipedia/fr/b/bf/Dark_Horse_Comics_Logo.svg';
    case 'DC Comics':
      return 'https://upload.wikimedia.org/wikipedia/commons/3/3d/DC_Comics_logo.svg';
    case 'Marvel Comics':
      return 'https://upload.wikimedia.org/wikipedia/commons/7/71/Marvel-Comics-Logo.svg';
    case 'NBC - Heroes':
      return 'https://upload.wikimedia.org/wikipedia/fr/thumb/0/09/Heroes_logo.jpg/320px-Heroes_logo.jpg';
    case 'Star Trek':
      return 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Emblem.svg';
    default:
      return '';
  }
};

const FranchiseLogos = ({
  selectedFranchises,
  removeFranchise,
}: {
  selectedFranchises: string[];
  removeFranchise: (franchise: string) => void;
}) => {
  const clickHandler = (franchise: string) => {
    removeFranchise(franchise);
  };
  return (
    <div style={{ display: 'inline-flex' }}>
      {selectedFranchises.map((publisher) => (
        <div key={publisher} style={{ height: '16px' }}>
          <img
            key={publisher}
            src={getFranchiseLogo(publisher)}
            alt={publisher}
            style={{ height: '48px' }}
            onClick={() => clickHandler(publisher)}
          />
        </div>
      ))}
    </div>
  );
};

type FranchiseSelectorProps = {
  availablePublishers: string[];
  selectedPublishers: string[];
  setSelectedPublishers: (publishers: string[]) => void;
  handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const FranchiseSelector = ({
  availablePublishers,
  selectedPublishers,
  setSelectedPublishers,
  handleChange,
}: FranchiseSelectorProps) => {
  const removeFranchise = (franchise: string) => {
    setSelectedPublishers(
      selectedPublishers.filter((publisher) => publisher !== franchise)
    );
  };

  return (
    <div style={{ display: 'inline-block' }}>
      <div>Pick some franchises:</div>
      <div style={{ display: 'inline-block' }}>
        <select
          value={selectedPublishers}
          name="publishers"
          onChange={handleChange}
          multiple
        >
          {availablePublishers.map((publisher, idx) => (
            <option key={idx} value={publisher}>
              {publisher}
            </option>
          ))}
        </select>
        <FranchiseLogos
          selectedFranchises={selectedPublishers}
          removeFranchise={removeFranchise}
        />

        {/* {JSON.stringify(selectedPublishers)} */}
      </div>
    </div>
  );
};

export default FranchiseSelector;
