import XAreaChart from '../components/XAreaChart';
import { config } from '../config';

const HistoricGrowthTrendVulnChart: React.FC = () => {
    const CVE_VULN_API = config.vfeedApiUrl + "/reports/vuln-trend-historic"
    const dataKeys = ["new_vulnerabilities", "modified_vulnerabilities"];
    const xAxisKey = 'year';

    return (
        <XAreaChart apiUrl={CVE_VULN_API} dataKeys={dataKeys} xAxisKey={xAxisKey} />
    );
};

export default HistoricGrowthTrendVulnChart;