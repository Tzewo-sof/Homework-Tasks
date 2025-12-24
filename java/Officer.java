public class Officer {
    public Officer() {
        this("second");
        System.out.println("i am first");
    }

    public Officer(String name) {
        System.out.println("officer name is" + name);
    }

    public Officer(int salary) {
        System.out.println("officer name is" + salary);
    }

    public static void main(string args[]) {
        Officer o1 = new Officer(9000);
    }

}
