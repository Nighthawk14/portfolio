export class TechnoPosition {
    private row: number = 0;
    private base:number = 6;
    private loopIndex: number = -1;

    getBase(index) {
        let addClear = false;
        this.loopIndex++;
        if(this.loopIndex === this.base) {
            this.base = (this.base === 6) ? 5 : 6;
            addClear = true;
            this.row++;
            this.loopIndex = 0;
        }

        return {
            base:this.base,
            row: this.row,
            addClear: addClear
        };
    }
}
