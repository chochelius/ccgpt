//create react component that dynamically shows graphs based on user imput data
import { useState } from "react";
import CanvasJSReact from '@canvasjs/react-charts';

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Data = () => {
    
        const [data, setData] = useState({
            dataPoints: [
                { label: "Apple", y: 10 },
                { label: "Orange", y: 15 },
                { label: "Banana", y: 25 },
                { label: "Mango", y: 30 },
                { label: "Grape", y: 28 }
            ]
        });
    
        const [data2, setData2] = useState({
            dataPoints: [
                { label: "Apple", y: 10 },
                { label: "Orange", y: 15 },
                { label: "Banana", y: 25 },
                { label: "Mango", y: 30 },
                { label: "Grape", y: 28 }
            ]
        });
    
        const [data3, setData3] = useState({
            dataPoints: [
                { label: "Apple", y: 10 },
                { label: "Orange", y: 15 },
                { label: "Banana", y: 25 },
                { label: "Mango", y: 30 },
                { label: "Grape", y: 28 }
            ]
        });
    
        const [data4, setData4] = useState({
            dataPoints: [
                { label: "Apple", y: 10 },
                { label: "Orange", y: 15 },
                { label: "Banana", y: 25 },
                { label: "Mango", y: 30 },
                { label: "Grape", y: 28 }
            ]
        });
    
        const [data5, setData5] = useState({
            dataPoints: [
                { label: "Apple", y: 10 },
                { label: "Orange", y: 15 },
                { label: "Banana", y: 25 },
                { label: "Mango", y: 30 },
                { label: "Grape", y: 28 }
            ]
        });
    
        const [data6, setData6] = useState({
            dataPoints: [
                { label: "Apple", y: 10 },
                { label: "Orange", y: 15 },
                { label: "Banana", y: 25 },
                { label: "Mango", y: 30 },
                { label: "Grape", y: 28 }
            ]
        });


        const options = {
            animationEnabled: true,
            title: {
                text: "Basic Column Chart in React"
            },
            data: [{
                type: "column",
                dataPoints: data.dataPoints
            }]
        }

        const options2 = {
            animationEnabled: true,
            title: {
                text: "Basic Column Chart in React"
            },
            data: [{
                type: "column",
                dataPoints: data2.dataPoints
            }]
        }

        const options3 = {
            animationEnabled: true,
            title: {
                text: "Basic Column Chart in React"
            },
            data: [{
                type: "column",
                dataPoints: data3.dataPoints
            }]
        }

        const options4 = {
            animationEnabled: true,
            title: {
                text: "Basic Column Chart in React"
            },
            data: [{
                type: "column",
                dataPoints: data4.dataPoints
            }]
        }

        const options5 = {
            animationEnabled: true,
            title: {
                text: "Basic Column Chart in React"
            },
            data: [{
                type: "column",
                dataPoints: data5.dataPoints
            }]
        }

        const options6 = {
            animationEnabled: true,
            title: {
                text: "Basic Column Chart in React"
            },
            data: [{
                type: "column",
                dataPoints: data6.dataPoints
            }]
        }        
        return (
            <div>
                <h1>Graphs</h1>
                <CanvasJSChart options={options} />
                <CanvasJSChart options={options2} />
                <CanvasJSChart options={options3} />
                <CanvasJSChart options={options4} />
                <CanvasJSChart options={options5} />
                <CanvasJSChart options={options6} />
            </div>
        );
    }

export default Data;