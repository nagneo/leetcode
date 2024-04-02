type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type ArrayType = { "id": number } & Record<string, JSONValue>;

function join(arr1: ArrayType[], arr2: ArrayType[]): ArrayType[] {
    let p1 = 0;
    let p2 = 0;
    
    arr1.sort((a,b) => a.id - b.id);
    arr2.sort((a,b) => a.id - b.id);
    
    const result = [];
    while(p1 < arr1.length && p2 < arr2.length) {
        if (arr1[p1].id < arr2[p2].id ) {
            result.push(arr1[p1])
            p1++;
        }
        else if (arr1[p1].id === arr2[p2].id) {
            const joined = {...arr1[p1], ...arr2[p2]}
            result.push(joined)
            p2++;
            p1++;
        }
        else {
            result.push(arr2[p2])
            p2++;
        }
    }
    
    // 남은 원소 추가
  while (p1 < arr1.length) {
    result.push(arr1[p1]);
    p1++;
  }
  while (p2 < arr2.length) {
    result.push(arr2[p2]);
    p2++;
  }

  // 합쳐진 배열 반환
  return result;
};