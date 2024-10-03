var beep = new Audio('beep3.mp3')
var mouseclick = new Audio('Mouseclick.mp3')
var done = new Audio('wrong.mp3')

const SelectionSortButton = document.querySelector(".SelectionSort");
SelectionSortButton.addEventListener('click', async function () {
    // headingchange1.textContent = "Selection Sort";
    selectText.innerHTML = `Selection Sort..`
    mouseclick.play()
    const description = document.querySelector('#description')
    description.style.display = 'flex'
    const section = document.querySelector('#fullbody')
    section.style.height = '184vh'
    await descriptionText_selection();


    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();

    await SelectionSort();
    // enableSortingBtn();
    // enableSizeSlider();
    enableNewArrayBtn();
});

async function descriptionText_selection() {
    const section = document.querySelector('#fullbody')
    section.style.height = `184vh`

    const description = document.querySelector('#description')
    description.style.display = 'flex'

    const code = document.querySelector('#code_java')
    // console.log(code.innerHTML)
    code.innerText = `// C++ program for implementation of Selection Sort
using namespace std;

void selectionSort(vector<int> &arr) {
    int n = arr.size();

    for (int i = 0; i < n - 1; ++i) {

        // Assume the current position holds
        // the minimum element
        int min_idx = i;

        // Iterate through the unsorted portion
        // to find the actual minimum
        for (int j = i + 1; j < n; ++j) {
            if (arr[j] < arr[min_idx]) {

                // Update min_idx if a smaller element is found
                min_idx = j; 
            }
        }

        // If a new minimum is found,
        // swap it with the element at index i
        if (min_idx != i) {
            swap(arr[i], arr[min_idx]);
        }
    }
}

void printArray(vector<int> &arr) {
    for (int &val : arr) {
        cout << val << " ";
    }
    cout << endl;
}

int main() {
    vector<int> arr = {64, 25, 12, 22, 11};

    cout << "Original array: ";
    printArray(arr); 

    selectionSort(arr);

    cout << "Sorted array: ";
    printArray(arr);

    return 0;
}
    
    
`
    const time = document.querySelector('#time')
    time.innerHTML = `<b>Time Complexity:</b> The time complexity of Selection Sort is O(N2) as there are two nested loops:

⭐One loop to select an element of Array one by one = O(N)
⭐Another loop to compare that element with every other Array element = O(N)

Therefore overall complexity = O(N) * O(N) = O(N*N) = O(N2)
`

    const space = document.querySelector('#space')
    space.innerHTML = `<b>Auxiliary Space:</b> O(1) as the only extra memory used is for temporary variables while swapping two values in Array. 
The selection sort never makes more than O(N) swaps and can be useful when memory write is a costly operation. `


}











async function SelectionSort() {
    const element = document.querySelectorAll(".bar");
    for (let i = 0; i < element.length; i++) {
        let smallest_element_index = i;
        element[i].style.background = 'rgb(250, 5, 54)';
        for (let j = i + 1; j < element.length; j++) {
            element[j].style.background = 'rgb(245, 212, 24)';
            await waitforme(delay);

            if (parseInt(element[j].style.height) < parseInt(element[smallest_element_index].style.height)) {
                if (smallest_element_index !== i) {
                    element[smallest_element_index].style.background = 'cyan'; // 
                }
                smallest_element_index = j;
            }
            else {
                element[j].style.background = 'cyan'; //
            }
        }
        beep.play()
        await waitforme(delay);
        swapping(element[smallest_element_index], element[i]);
        element[smallest_element_index].style.background = 'cyan';
        element[i].style.background = 'rgb(0,255,0)';
    }
    selectText.innerHTML=`Sorting Complete!`
    done.play();
}