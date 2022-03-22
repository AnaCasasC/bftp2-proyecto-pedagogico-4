package com.econotravel.api.repositories;

import javax.persistence.*;
import java.awt.*;
import java.util.List;
import java.util.Objects;

@Entity
@Table(name="experiences")
public class Experience {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Lob
    private String image;
    private String name;
    @Lob
    private String description;
    private double price;
    private String duration;
    private boolean accessibility;
    @Lob
    private String accessibilityDescription;

    public Experience() {

    }

    public Experience(Long id, String image, String name, String description, double price, String duration, boolean accessibility, String accessibilityDescription) {

        this.id = id;
        this.image = image;
        this.name = name;
        this.description = description;
        this.price = price;
        this.duration = duration;
        this.accessibility = accessibility;
        this.accessibilityDescription = accessibilityDescription;

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getImage() { return image; }

    public void setImage(String image) { this.image = image; }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() { return description; }

    public void setDescription(String description) { this.description = description; }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getDuration() {
        return duration;
    }

    public void setDuration(String duration) {
        this.duration = duration;
    }

    public boolean isAccessibility() { return accessibility; }

    public void setAccessibility(boolean accessibility) { this.accessibility = accessibility; }

    public String getAccessibilityDescription() { return accessibilityDescription; }

    public void setAccessibilityDescription(String accessibilityDescription) { this.accessibilityDescription = accessibilityDescription; }

    @Override
    public String toString() {
        return "Experience{" +
                "id=" + id +
                ", image='" + image + '\'' +
                ", name='" + name + '\'' +
                ", description='" + description + '\'' +
                ", price=" + price +
                ", duration='" + duration + '\'' +
                ", accessibility='" + accessibility + '\'' +
                ", accessibilityDescription='" + accessibilityDescription + '\'' +
                '}';
    }

}