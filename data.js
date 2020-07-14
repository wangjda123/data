const fs = require('fs')

const log = console.log.bind(console)

class MaData {
    constructor() {

        this.time = ''              // time
        this.name = ''              // 名称
        this.hezhaCurrent = 0       // 合闸电流
        this.fenzhaCurrent = 0      // 分闸电流
        this.chunengCurrent = 0     // 储能电流
        // this.hezhaVoltage = 0       // 合闸电压
        // this.fenzhaVoltage = 0      // 分闸电压
        // this.chunengVoltage = 0     // 储能电压

    }
}

const randomData = () => {
    let datas = []
    let data = new MaData()
    let timeNum1 = (new Date("2020/07/10 14:00:00")).getTime()
    let names = [
        '#1电容器','海凤3731','#3电容器','#1所用变','35kVI段母线避雷器','海洪3734',
        '35kVI段母线压变插件','#1主变35kV','海变3733','35kV母分开关','35kV母分插件',
        '备用3572开关','#2主变35kV开关','35kVII段母线避雷器','海牌3735开关','35kVII段母线压变插件',
        '#2电容器开关','#2所用变开关','#2电抗器开关','海时3738开关']
    // let timeNum1 = time.getTime()
    log(timeNum1)
    for(let i = 0 ;i < 10; i++) {
        let timeNum = timeNum1 + i * 1000 * 60 * 15
        let newTime = new Date(timeNum)
        // 有时区因素在哪，T时区少8小时
        log('new time:', newTime, i, timeNum)
        for (let j = 0; j < names.length; j++) {
            let name = names[j]
            // log('name',name,j)
            data.time = newTime
            data.name = name
            // this.hezhaCurrent = 0       // 合闸电流
            // this.fenzhaCurrent = 0      // 分闸电流
            // this.chunengCurrent = 0     // 储能电流
            // this.hezhaVoltage = 0       // 合闸电压
            // this.fenzhaVoltage = 0      // 分闸电压
            // this.chunengVoltage = 0     // 储能电压
            data.hezhaCurrent = parseFloat((Math.random() * 5).toFixed(2))
            data.fenzhaCurrent = parseFloat((Math.random() * 5).toFixed(2))
            data.chunengCurrent = parseFloat((Math.random() * 5).toFixed(2))
            // data.hezhaVoltage = 220 + parseFloat((Math.random() * 20).toFixed(2))
            // data.fenzhaVoltage = 220 + parseFloat((Math.random() * 20).toFixed(2))
            // data.chunengVoltage = 220 + parseFloat((Math.random() * 20).toFixed(2))
            // log('data',data)
            datas.push(data)
            // log('datas',datas)
        }
    }
    // log('datas',datas)
    return datas
}

const saveData = (data) => {
    // JSON.stringify 第 2 3 个参数配合起来是为了让生成的 json
    // 数据带有缩进的格式，第三个参数表示缩进的空格数
    let s = JSON.stringify(data,null,2)
    let path = 'machine.json'
    fs.writeFileSync(path, s)
}



const __main = () => {
    let data = randomData()
    saveData(data)
}

__main()