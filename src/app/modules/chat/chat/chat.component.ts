import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat',
  imports: [CommonModule, FormsModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {
  status: string = 'Completed'
  messages = [
    {
      sender: 'me',
      text: 'Hey, how are you?',
      timestamp: new Date('2025-05-10T09:15:00')
    },
    {
      sender: 'other',
      text: 'Good! Working on the Angular app.',
      timestamp: new Date('2025-05-10T09:17:00')
    },
    {
      sender: 'me',
      text: 'Sounds great!',
      timestamp: new Date('2025-05-10T09:18:00')
    }
  ];

  newMessage = '';

  groupedMessages() {
    const groups: { [key: string]: any[] } = {};
    const today = new Date().toDateString();

    for (const msg of this.messages) {
      const dateStr = msg.timestamp.toDateString();
      if (!groups[dateStr]) groups[dateStr] = [];
      groups[dateStr].push(msg);
    }

    return Object.entries(groups).map(([dateStr, msgs]) => ({
      dateLabel: new Date(dateStr).toDateString() === today ? 'Today' : dateStr,
      messages: msgs.sort((a, b) => a.timestamp.getTime() - b.timestamp.getTime())
    }));
  }

  sendMessage() {
    if (!this.newMessage.trim()) return;

    this.messages.push({
      text: this.newMessage.trim(),
      sender: 'me',
      timestamp: new Date()
    });

    this.newMessage = '';

    setTimeout(() => {
      const el = document.querySelector('.chat-box');
      el?.scrollTo({ top: el.scrollHeight, behavior: 'smooth' });
    });
  }

  onKeyPress(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.sendMessage();
    }
  }
}
