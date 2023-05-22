import React from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'



function BarChart({ datos }) {

    console.log(datos)
    return
    <Bar data={datos} />


}

export default BarChart