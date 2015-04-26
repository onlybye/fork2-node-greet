var greet=require("greet");
describe('greet',function(){
	it("should greet a person by name",function(){
		expect(greet("wxq")).to.eql("hello,wxq");
	});
	it("should greet a person flirtatiously if drunk",function(){
		expect(greet("wxq","drunk")).to.eql("hello,wxq,you look sexy today");
	});
});