const superxmltoobj = require('./../lib/superxmltoobj');

test('1', () => {
    let str = `
<root>
    <obj>
        <fizz superxmltoobj_print="true" superxmltoobj_var="19">
            <lol superxmltoobj_print="true" superxmltoobj_var="24">
                kek
            </lol>
        </fizz>
        <buzz superxmltoobj_print="true" superxmltoobj_var="21">
            <lol superxmltoobj_print="true" superxmltoobj_var="24">
                kek
            </lol>
        </buzz>
    </obj>
    <obj2>
        <fizz superxmltoobj_print="false" superxmltoobj_var="19"/>
        <buzz superxmltoobj_print="false" superxmltoobj_var="21"/>
        <fizzbuzz>
            <lol superxmltoobj_print="false" superxmltoobj_var="24"/>
        </fizzbuzz>
    </obj2>
</root>`;
    let obj = JSON.parse(`{"root":{"obj":{"fizz":{"lol":"kek"},"buzz":{"lol":"kek"}},"obj2":{"fizz":{"lol":"kek"},"buzz":{"lol":"kek"},"fizzbuzz":{"lol":"kek"}}}}
    `);
    expect(superxmltoobj.decode(str)).toEqual(obj);
});
