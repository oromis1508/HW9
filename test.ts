class Strings {
    constructor(private str: string, private classNum: number){
    }

    getMaxSym() {
        const arr = this.str.split('');
        const set = new Set(this.str);
        let result: string[] = [];
        let max = 0;
        for (const sym of set) {
            const filter = arr.filter(el => el === sym);
            if(filter.length > max) {
                result = [filter[0]];
                max = filter.length;
            } else if(filter.length === max) result.push(filter[0]);
        }

        return result;
    }

    getMaxSym2() {
        const arr = this.str.split('').sort();

        let result: string[] = [];
        let max = 0;
        while(arr.length) {
            const splice = arr.splice(0, arr.lastIndexOf(arr[0]) + 1);
            if(splice.length > max) {
                result = [splice[0]];
                max = splice.length;
            } else if(splice.length === max) result.push(splice[0]);
        }

        return result;
    }

    getMaxSym3() {
        let str = this.str;
        let previosStr = str;
        let result: string[] = [];
        let max = 0;
        
        while(str.length) {
            previosStr = str;
            str = str.replace(new RegExp(str[0], 'g'), '');
            
            const difference = previosStr.length - str.length;
            if(difference > max) {
                result = [previosStr[0]];
                max = difference;
            } else if(difference === max) result.push(previosStr[0]);
        }

        return result;
    }


    reversePart(index?: number) {
        const num = this.classNum - (index ?? 0);

        if(num === 0) return this.str;
        else if(num > 0) {
            const arr = this.str.split('');
            const splice = arr.splice(0, num);
            const beginningReverse = splice.reverse();
            arr.unshift(...beginningReverse);

            return arr.join('');
        } else {
            const arr = this.str.split('');
            const splice = arr.splice(num);
            const endingReverse = splice.reverse();
            arr.push(...endingReverse);

            return arr.join('');

        }
    }
}

console.log(new Strings('assssddffff', 0).getMaxSym())
console.log(new Strings('assssddffff', 0).getMaxSym())
console.log(new Strings('assssddffff', 0).getMaxSym())
console.log(new Strings('12345', 1).reversePart(3))
console.log(new Strings('12345', 1).reversePart(-3))
console.log([123, 321].splice(-1))