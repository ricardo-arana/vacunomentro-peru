import { Doughnut } from 'react-chartjs-2';
import styles from '../../styles/TotalPopulationChart.module.scss';

export default function TotalPopulationChart({ data }) {
  // TODO: verificar alguna fuente confiable para obtener la población peruana
  const totalPopulationPeru = 31488625;

  const dataChart = {
    labels: ['Inmunizados', 'No inmunizados'],
    datasets: [
      {
        label: '# of Votes',
        data: [data.totalBothDose, totalPopulationPeru - data.totalBothDose],
        backgroundColor: ['rgba(54, 162, 235, 0.2)', 'rgba(255, 99, 132, 0.2)'],
        borderColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <div className="row mt-4 mb-2">
        <div className="fs-3"> Población inmunizada </div>
      </div>
      <div className="row mt-2 mb-4 d-flex align-items-center justify-content-center">
        <div className={styles.chart}>
          <Doughnut data={dataChart} />
        </div>
      </div>
    </>
  );
}
