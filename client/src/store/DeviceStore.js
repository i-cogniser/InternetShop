import {makeAutoObservable} from 'mobx'

export default class DeviceStore {
    constructor() {
        this._types = [
            {id:1, name: 'Холодильник'},
            {id:2, name: 'Смартфоны'},
            {id:3, name: 'Ноутбуки'},
            {id:4, name: 'Телевизоры'}
        ]
        this._brands = [
            {id:1, name: 'Samsung'},
            {id:1, name: 'Apple'}
        ]
        this._devices = [
            {id:1, name: 'Iphone 12 pro', price: 25000, rating:5, img:'https://goo-gl.ru.com/taO'},
            {id:2, name: 'Iphone 12 pro', price: 25000, rating:5, img:'https://goo-gl.ru.com/taO'},
            {id:3, name: 'Iphone 12 pro', price: 25000, rating:5, img:'https://goo-gl.ru.com/taO'},
            {id:4, name: 'Iphone 12 pro', price: 25000, rating:5, img:'https://goo-gl.ru.com/taO'},

        ]
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }
    setDevices(devices) {
        this._devices = devices
    }

    get types(){
        return this._types
    }
    get brands(){
        return this._brands
    }
    get devices(){
        return this._devices
    }
}
