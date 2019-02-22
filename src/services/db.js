import Dexie from 'dexie'
import greenlet from 'greenlet'

const STORES = {
    people: '++id,firstName,lastName'
}

let db = new Dexie('JustPeople')

db.version(1).stores(STORES)

export async function reset() {
    await Dexie.delete('JustPeople')
    db = new Dexie('JustPeople')
    db.version(1).stores(STORES)
}

export function getDB() {
    return db
}

export async function createPerson(person) {
    return await db.people.put(person)
}

export async function people() {
    return await db.people.toArray()
}

export const filterPeople = greenlet(function (people, filters = []) {
    let filtered = people
    filters.map(str => console.log(str))
    filters.map(fnStr => eval(fnStr)).map(fn => {
        filtered = people.filter(fn)
    })
    return filtered
})
