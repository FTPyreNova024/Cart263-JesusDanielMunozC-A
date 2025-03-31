window.onload = async function () {
    console.log("task 7-8");
    try {
        const response = await fetch('data/iris.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        // Object properties: sepalLength, sepalWidth, petalLength, petalWidth, species

        let possibleColor = ["#5d3fd3", "#a73fd3", "#d33fb5", "#d35d3f", "#d3a73f"];
        const irisesWithColors = data.map(iris => {
            return {
                ...iris,
                color: possibleColor[Math.floor(Math.random() * possibleColor.length)]
            };
        });

        console.log(irisesWithColors);

        const filteredIrises = irisesWithColors.filter(iris => iris.sepalWidth < 4);
        console.log(filteredIrises);
    } catch (error) {
        console.error('Error fetching the data:', error);
    }
}