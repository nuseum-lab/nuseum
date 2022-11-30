import { Radar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
} from 'chart.js';
ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);
ChartJS.defaults.font.size = 8;

const RadarGraph = ({ dateCount, data, range }) => {
    let dataForRadar = {
        labels: [
            // 'A',
            // 'B',
            // 'C',
            // 'D',
            // 'E',
            // 'F',
            // 'G',
            // 'H',
            // 'I',
            // 'J',
            // 'K',
            // 'L',

            'DHA+EPA',
            '엽산',
            '마그네슘',
            '트립토판',
            '비타민 A',
            '식이섬유',
            '비타민 B6',
            '비타민 B12',
            '비타민 D',
        ],
        datasets: [
            {
                label: '영양제 + 음식(%)',
                data: [
                    (
                        (+data.dha_epa / (range.dha_epa * dateCount)) *
                        100
                    ).toFixed(1) > 100
                        ? 100
                        : (
                              (+data.dha_epa / (range.dha_epa * dateCount)) *
                              100
                          ).toFixed(1),
                    (
                        (+data.folic_acid / (range.folic_acid * dateCount)) *
                        100
                    ).toFixed(1) > 100
                        ? 100
                        : (
                              (+data.folic_acid /
                                  (range.folic_acid * dateCount)) *
                              100
                          ).toFixed(1),
                    (
                        (+data.magnesium / (range.magnesium * dateCount)) *
                        100
                    ).toFixed(1) > 100
                        ? 100
                        : (
                              (+data.magnesium /
                                  (range.magnesium * dateCount)) *
                              100
                          ).toFixed(1),
                    (
                        (+data.tryptophan / (range.tryptophan * dateCount)) *
                        100
                    ).toFixed(1) > 100
                        ? 100
                        : (
                              (+data.tryptophan /
                                  (range.tryptophan * dateCount)) *
                              100
                          ).toFixed(1),
                    (
                        (+data.vitamin_a / (range.vitamin_a * dateCount)) *
                        100
                    ).toFixed(1) > 100
                        ? 100
                        : (
                              (+data.vitamin_a /
                                  (range.vitamin_a * dateCount)) *
                              100
                          ).toFixed(1),
                    (
                        (+data.dietary_fiber /
                            (range.dietary_fiber * dateCount)) *
                        100
                    ).toFixed(1) > 100
                        ? 100
                        : (
                              (+data.dietary_fiber /
                                  (range.dietary_fiber * dateCount)) *
                              100
                          ).toFixed(1),
                    (
                        (+data.vitamin_b6 / (range.vitamin_b6 * dateCount)) *
                        100
                    ).toFixed(1) > 100
                        ? 100
                        : (
                              (+data.vitamin_b6 /
                                  (range.vitamin_b6 * dateCount)) *
                              100
                          ).toFixed(1),
                    (
                        (+data.vitamin_b12 / (range.vitamin_b12 * dateCount)) *
                        100
                    ).toFixed(1) > 100
                        ? 100
                        : (
                              (+data.vitamin_b12 /
                                  (range.vitamin_b12 * dateCount)) *
                              100
                          ).toFixed(1),
                    (
                        (+data.vitamin_d / (range.vitamin_d * dateCount)) *
                        100
                    ).toFixed(1) > 100
                        ? 100
                        : (
                              (+data.vitamin_d /
                                  (range.vitamin_d * dateCount)) *
                              100
                          ).toFixed(1),
                ],
                fill: true,
                backgroundColor: 'rgba(190, 197, 198, 0.6)',
                borderColor: 'rgba(190, 197, 198, 0.6)',
                pointBackgroundColor: 'rgba(190, 197, 198, 0.6)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(190, 197, 198, 0.6)',
            },
        ],
    };

    return (
        <>
            <Radar
                style={{
                    marginTop: 30,
                    marginBottom: 30,
                    width: '100%',
                }}
                data={dataForRadar}
                options={{
                    plugins: {
                        title: {
                            align: 'center',
                        },
                        legend: {
                            labels: {
                                // This more specific font property overrides the global property
                                font: {
                                    family: 'Noto Serif KR,serif',
                                    size: 11,
                                },
                                boxWidth: 20,
                            },
                        },
                    },
                    scales: {
                        r: {
                            pointLabels: {
                                font: {
                                    family: 'Noto Serif KR,serif',
                                    size: 10,
                                },
                            },
                            max: 100,
                        },
                    },

                    elements: {
                        point: {
                            radius: 2,
                        },
                    },
                }}
            />
        </>
    );
};

export default RadarGraph;
