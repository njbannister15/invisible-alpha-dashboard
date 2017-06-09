package com.cmd.event;


import com.invisiblealpha.common.events.IEvent;

public interface IEventStore {
	public void save(IEvent event) ;
}
