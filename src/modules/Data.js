import makeModule from './ModuleMaker'

var Data = makeModule('DATA', {
    locations: []
})

export default Data.reducer
export const set = Data.set
export const remove = Data.remove
