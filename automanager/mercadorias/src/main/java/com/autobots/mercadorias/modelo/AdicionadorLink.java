package com.autobots.mercadorias.modelo;


import java.util.List;

public interface AdicionadorLink<T> {
    public void adicionarLink(List<T> list);
    public void adicionarLink(T objeto);

}
