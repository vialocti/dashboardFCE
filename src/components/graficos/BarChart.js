
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, Tooltip, Legend, CategoryScale, LinearScale } from 'chart.js'


function BarChart({ datos, etiquetas }) {

    console.log(datos, etiquetas)
    ChartJS.register(BarElement, Tooltip, Legend, CategoryScale, LinearScale)

    const data = {
        labels: etiquetas,
        datasets: [{
            label: 'reinscriptos',
            backgroundColor: 'rgba(190,190,255,1',
            borderColor: 'black',
            borderWidth: 1,
            hoverBackgrounColor: 'rgba(0,255,222,0.4)',
            hoverBorderColor: '#FF0000',
            data: datos

        }]
    };

    const opciones = {
        maintenAspectRatio: false,
        responsive: true,
    }




    return (
        <Bar data={data} options={opciones} />
    )

}

export default BarChart