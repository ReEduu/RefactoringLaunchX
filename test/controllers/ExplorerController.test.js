const ExplorerController = require("./../../lib/controllers/ExplorerController");
const Reader = require("./../../lib/controllers/ExplorerController");

describe("Unit test for User Re",()=>{
    test("evaluate getExplorersAmountByMission method",()=>{
        const nodeAmount = ExplorerController.getExplorersAmountByMission("node");
        expect(nodeAmount).toBe(10);
    });
    test("evaluate filterByMission method",()=>{
        const nodeExplorers = ExplorerController.filterByMission("node");
        expect(nodeExplorers[0].name).toBe("Woopa1");
    });
    test("evaluate getExplorersUsernamesByMission method",()=>{
        const nodeUsernames = ExplorerController.getExplorersUsernamesByMission("node");
        expect(nodeUsernames[0]).toBe("ajolonauta1");
    });
});
