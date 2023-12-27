package Prilozhenie_parkomata.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Prilozhenie_parkomata.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Шлагбаум
 */
@Entity(name = "IISPrilozhenie_parkomataШлагбаум")
@Table(schema = "public", name = "Шлагбаум")
public class SHlagbaum {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Положение")
    private String положение;

    @Column(name = "Адрес")
    private String адрес;

    @Column(name = "НомШлаг")
    private Integer номшлаг;


    public SHlagbaum() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getПоложение() {
      return положение;
    }

    public void setПоложение(String положение) {
      this.положение = положение;
    }

    public String getАдрес() {
      return адрес;
    }

    public void setАдрес(String адрес) {
      this.адрес = адрес;
    }

    public Integer getНомШлаг() {
      return номшлаг;
    }

    public void setНомШлаг(Integer номшлаг) {
      this.номшлаг = номшлаг;
    }


}