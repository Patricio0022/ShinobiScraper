import React, { useState, useEffect } from 'react';



interface ScraperDataProps {
  characterName: string; 
}

export const ScraperData: React.FC<ScraperDataProps> = ({ characterName }) => {
  const [data, setData] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchScraperData = async (name: string) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`http://localhost:5000/scraper?name=${encodeURIComponent(name)}`);

      if (!response.ok) {
        throw new Error('Erro ao acessar os dados do scraper');
      }

      const result = await response.json();
      setData(result.items);
    } catch (err: any) {
      setError(err.message || 'Erro desconhecido');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (characterName) {
      fetchScraperData(characterName); 
    }
  }, [characterName]);

  return(
    <div className="scraper-data-container" style={{ fontFamily: 'Arial, sans-serif', padding: '10px', maxWidth: '600px', margin: '0 auto' }}>
      {loading && (
        <p style={{ fontSize: '18px', color: 'black', fontWeight: 'bold', marginBottom: '10px' }}>Loading...</p>
      )}

      {error && (
        <p style={{ fontSize: '16px', color: '#F44336', fontWeight: 'bold', marginBottom: '10px' }}>{error}</p>
      )}

      {data.length > 0 ? (
        <ul style={{ listStyleType: 'none', paddingLeft: '0', marginTop: '20px' }}>
          {data.map((item, index) => (
            <li
              key={index}
              style={{
                fontSize: '16px',
                color: '#333',
                marginBottom: '12px',
                lineHeight: '1.6',
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      ) : (
        <p style={{ fontSize: '16px', color: '#757575' }}>...</p>
      )}
    </div>
  );
};
