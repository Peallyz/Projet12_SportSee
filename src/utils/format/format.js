export default class formatData {
    formatWeek (data) {
        for (const day of data.data.sessions) {
            const daysArray = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
            day.day = daysArray
        }
        return data
    }
    formatName (data) {
        data.data.data[0].kind = "Cardio"
        data.data.data[1].kind = "Energie"
        data.data.data[2].kind = "Endurance"
        data.data.data[3].kind = "Force"
        data.data.data[4].kind = "Vitesse"
        data.data.data[5].kind = "Intensité"
        return data
    }
    formatScore (data) {
        data.data.formatedScore = data.data.todayScore || data.data.score
        return data
    }
}
