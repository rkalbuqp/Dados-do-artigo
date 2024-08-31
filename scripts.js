
// Dados para os gráficos
const data = {
    gender: {
        labels: ['Jun-Dez 2020', 'Jun-Dez 2021', 'Jun-Dez 2022'],
        datasets: [
            {
                label: 'Feminino',
                data: [62.71, 70.5, 70.7],
                backgroundColor: 'rgba(255, 99, 132, 0.6)',
            },
            {
                label: 'Masculino',
                data: [37.29, 29.5, 29.3],
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
            }
        ]
    },
    ageGroup: {
        labels: ['18-39 anos', '40-59 anos', '60+ anos'],
        datasets: [
            {
                label: 'Jun-Dez 2020',
                data: [40.93, 47.85, 11.22],
                backgroundColor: 'rgba(255, 159, 64, 0.6)',
            },
            {
                label: 'Jun-Dez 2021',
                data: [45.3, 54.7, 3.2],
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
            },
            {
                label: 'Jun-Dez 2022',
                data: [42.1, 54.1, 3.8],
                backgroundColor: 'rgba(153, 102, 255, 0.6)',
            }
        ]
    },
    ethnicity: {
        labels: ['Pardo', 'Branco', 'Amarelo', 'Preto', 'Indígena', 'Não Informado'],
        datasets: [
            {
                label: 'Jun-Dez 2020',
                data: [41.91, 29.7, 3.96, 3.63, 0.33, 20.46],
                backgroundColor: 'rgba(255, 206, 86, 0.6)',
            },
            {
                label: 'Jun-Dez 2021',
                data: [55.8, 38.9, 5.3, 4.2, 0, 9.5],
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
            },
            {
                label: 'Jun-Dez 2022',
                data: [43.6, 51.9, 0.8, 0.8, 0, 3],
                backgroundColor: 'rgba(153, 102, 255, 0.6)',
            }
        ]
    },
    vaccination: {
        labels: ['2 doses', '3 doses', '4 doses'],
        datasets: [
            {
                label: 'Jun-Dez 2020',
                data: [48.84, 42.57, 20.79],
                backgroundColor: 'rgba(255, 99, 132, 0.6)',
            },
            {
                label: 'Jun-Dez 2021',
                data: [64.2, 55.8, 26.3],
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
            },
            {
                label: 'Jun-Dez 2022',
                data: [36.8, 77.4, 36.8],
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
            }
        ]
    },
    symptoms: {
        labels: ['Febre', 'Dor de garganta', 'Tosse', 'Coriza', 'Mialgia', 'Dispneia', 'Diarreia', 'Espirro', 'Distúrbio gustativo', 'Distúrbio olfatório', 'Fadiga', 'Obstrução nasal', 'Ardência ocular'],
        datasets: [
            {
                label: 'Jun-Dez 2020',
                data: [25.74, 35.64, 31.98, 16.83, 24.09, 4.29, 5.61, 0.99, 2.64, 6.6, 2.97, 1.65, 0.33],
                backgroundColor: 'rgba(255, 159, 64, 0.6)',
            },
            {
                label: 'Jun-Dez 2021',
                data: [28.42, 67.37, 56.84, 68.42, 10.53, 15.79, 9.47, 47.37, 6.32, 6.32, 8.42, 2.11, 1.05],
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
            },
            {
                label: 'Jun-Dez 2022',
                data: [36.84, 69.92, 79.7, 82.71, 29.32, 6.77, 10.53, 66.17, 9.77, 9.77, 21.05, 14.29, 7.89],
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
            }
        ]
    }
};

// Função para criar gráficos
function createChart(ctx, type, data) {
    new Chart(ctx, {
        type: type,
        data: data,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
            },
        },
    });
}

// Criando os gráficos
window.onload = function() {
    createChart(document.getElementById('genderChart'), 'bar', data.gender);
    createChart(document.getElementById('ageGroupChart'), 'bar', data.ageGroup);
    createChart(document.getElementById('ethnicityChart'), 'bar', data.ethnicity);
    createChart(document.getElementById('vaccinationChart'), 'bar', data.vaccination);
    createChart(document.getElementById('symptomsChart'), 'bar', data.symptoms);
};
