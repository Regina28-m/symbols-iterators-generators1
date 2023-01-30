export default class Team {
  constructor() {
    this.members = new Set();
  }

  addMembers(...members) {
    for (const member of members) {
      this.members.add(member);
    }
  }

  [Symbol.iterator]() {
    const memberList = Array.from(this.members);
    let i = 0;
    return {
      next() {
        if (i < memberList.length) {
          const currentMember = memberList[i];
          i += 1;
          return {
            done: false,
            value: currentMember,
          };
        }
        return {
          done: true,
        };
      },
    };
  }
}
