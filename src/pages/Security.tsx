import  { useEffect, useState } from 'react';





interface Cve {
    cve: {
      CVE_ID: string;
      description: {
        description_data: {
          value: string;
        }[];
      };
    };
    impact: {
      baseMetricV3: {
        cvssV3: {
          baseSeverity: string;
        };
      };
    };
  }





const Security = () => {
    const [cves, setCves] = useState<Cve[]>([]);

 useEffect(() => {
 fetch('https://services.nvd.nist.gov/rest/json/cves/1.0')
   .then(response => response.json())
   .then(data => {
     const top10Cves = data.result.CVE_Items.slice(0, 10);
     setCves(top10Cves);
   })
   .catch(error => console.error('Failed to fetch CVEs', error));
 }, []);


};

export default Security;
