import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.layout.StackPane;
import javafx.stage.Stage;

public class LifeCycleDemo extends Application {

    @Override
    public void init() {
        System.out.println("In init() method");
    }

    @Override
    public void start(Stage primaryStage) {

        StackPane root = new StackPane();
        Scene scene = new Scene(root, 300, 250);
        primaryStage.setTitle("Hello World!");
        primaryStage.setScene(scene);
        primaryStage.show();
        System.out.println("In start() method");
    }

    @Override
    public void stop() {
        System.out.println("In stop() method");
    }

    public static void main(String[] args) {
        launch(args);
    }
}