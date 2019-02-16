export class Farm
{
    name: string;
    latestTemperature: number;
    latestHumidity: number;
    description: string;
    imagePath: string;
    temperatureList:number[];
    humidityList:number[];

    constructor(name:string, description:string, imagePath:string,
        temperatureList:number[],humidityList:number[])
    {
        this.name=name;
        this.description=description;
        this.imagePath=imagePath;
        this.temperatureList=temperatureList;
        this.humidityList=humidityList;
        this.latestTemperature=temperatureList[temperatureList.length-1];
        this.latestHumidity=humidityList[humidityList.length-1]
    }
}