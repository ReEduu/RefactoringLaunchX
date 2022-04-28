const Reader = require('./../../lib/utils/Reader')
const ExplorerService = require('./../../lib/services/ExplorerService')

describe("Unit test for User Reader",()=>{
    test('Return the list of explorers antes test the first explorer',()=>{
        const explorers = Reader.readJsonFile("explorers.json")
        nodeExplorers = ExplorerService.filterByMission(explorers, "node")
        nodeAmount = ExplorerService.getAmountOfExplorersByMission(explorers, "node")
        nodeUsernames=ExplorerService.getExplorersUsernamesByMission(explorers, "node")
        expect(nodeExplorers[0].name).toBe("Woopa5")
        expect(nodeAmount).toBe(10)
        expect(nodeUsernames[0]).toBe("ajolonauta1")
    })
})
