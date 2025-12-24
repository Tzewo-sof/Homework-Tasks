import java.util.Scanner;

public class Account {
    private double balance;

    public Account(double starting_balance) {
        balance = starting_balance;
    }

    public void depose(double amt) {
        balance = balance + amt;
    }

    public double getGetCurrentBalance() {
        return balance;
    }

    public class AccountTest {
        public static void main(string args[]) {
            Scanner in = new Scanner(System.in);
            Double bal, amt;
            Account acct = new Account(200);
            System.out.println("please enter amount of deposit");
            amt = in.nextDouble();
            acct.depose(amt);
            System.out.println("The current balance is: \" + \r\n" + //
                    "acct.getCurrentBalance()");
        }
    }

}
