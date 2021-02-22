var findMedianSortedArrays1 = function(nums1, nums2) {
    const totalLength = nums1.length + nums2.length
    const isOdd = totalLength % 2 === 1
    const idxToFind = Math.ceil(totalLength / 2) - 1
    let idx1 = 0 
    let idx2 = 0
    
    let valueIdxToFind = null
    for(let i = 0; i<= idxToFind; i++) {
        if(nums1[idx1]<nums2[idx2]) {
           valueIdxToFind = nums1[idx1]
           idx1++
        } else {
           valueIdxToFind = nums2[idx2]
           idx2++
        }
    }
    
    return isOdd ? valueIdxToFind : getEvenMedia(nums1, nums2, idx1, idx2, valueIdxToFind)
};
    
function getEvenMedia(nums1, nums2, idx1, idx2, valueIdxToFind) {
    const next = nums1[idx1]<nums2[idx2] ? nums1[idx1] :nums2[idx2]
    return (valueIdxToFind + next) / 2
}

var findMedianSortedArrays = function(nums1, nums2) {
    const merged = []
    const totalLength = nums1.length + nums2.length
    if(!totalLength) {
        return 0
    }
    const isOdd = totalLength % 2 === 1
    const elementsToMerge = isOdd ? Math.floor(totalLength / 2) : totalLength / 2
    let idx1 = 0 
    let idx2 = 0
    
    for(let i = 0; i <= elementsToMerge; i++) {

        if((nums1[idx1] || Infinity) <= (nums2[idx2] || Infinity)) {
           merged.push(nums1[idx1])
           idx1++
        } else {
           merged.push(nums2[idx2])
           idx2++
        }
    }
    console.log(merged)
    const last = merged[merged.length-1]
    return isOdd ? last : (last + merged[merged.length-2])/2
};

findMedianSortedArrays([0,0], [0, 0])
