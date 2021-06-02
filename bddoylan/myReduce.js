/* My reduce function implementation */

function myReduce(obj, func, out)
{
    for(let i of obj)
    {
        out = func(out, i);
    }
    return out;
}