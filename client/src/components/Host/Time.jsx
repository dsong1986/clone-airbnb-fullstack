import React from 'react'

export default function Time() {
    return (
        <>
        <div className='items-center justify-center flex'>
            <select name="hours" class="bg-transparent text-xl appearance-none outline-none">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">10</option>
                <option value="12">12</option>
            </select>
            <span class="text-xl mr-3">:</span>
            <select name="minutes" class="bg-transparent text-xl appearance-none outline-none mr-4">
                <option value="0">00</option>
                <option value="30">30</option>
            </select>
            <select name="ampm" class="bg-transparent text-xl appearance-none outline-none">
                <option value="am">AM</option>
                <option value="pm" selected="selected">PM</option>
            </select>
            </div>
        </>
    )

}
